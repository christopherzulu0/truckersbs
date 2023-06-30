import { useState, useEffect } from "react";
import { Button, FormControl, FormErrorMessage, FormLabel, Input, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Select } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { IoIosClose } from "react-icons/io";
import { app, firestore, storage } from "@/firebase/clientApp";
import { addDoc, collection, getFirestore, serverTimestamp, updateDoc } from "firebase/firestore";
import { ref, uploadString, getDownloadURL } from "firebase/storage";
import { useFormik } from "formik";
import * as Yup from "yup";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface CreateArticleFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateArticleForm: React.FC<CreateArticleFormProps> = ({ isOpen, onClose }: CreateArticleFormProps) => {
  const [showModal, setShowModal] = useState(false);
  const [tags, setTags] = useState<string[]>([]);

  const formik = useFormik({
    initialValues: {
      title: "",
      category: "",
      description: "",
      imageUrl: "",
      tags: [],
      reads: 0,
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      category: Yup.string().required("Category is required"),
      description: Yup.string().required("Description is required"),
      imageUrl: Yup.string().required("Image URL is required"),
      tags: Yup.array().of(Yup.string()),
      reads: Yup.string()
    }),
    onSubmit: (values: any) => {
      handleCreateArticle();
    },
  });

  const handleCreateArticle = async () => {
    if (formik.isValid) {
      try {
        // Get the Firebase Firestore instance
        const firestore = getFirestore();

        // clean the description from the quill editor
        const parser = new DOMParser();
        const doc = parser.parseFromString(
          formik.values.description,
          "text/html"
        );
    // Clean the description from the Quill editor
    let cleanDescription = '';
    if (formik.values.description) {
      const parser = new DOMParser();
      const docx = parser.parseFromString(formik.values.description, 'text/html');
      const paragraphs = Array.from(docx.querySelectorAll('p'));
      cleanDescription = paragraphs.map((p) => p.textContent).join('\n\n');
    }

    // Create a new article document in the "articles" collection
    const articleDocRef = await addDoc(collection(firestore, 'articles'), {
      title: formik.values.title,
      category: formik.values.category,
      description: cleanDescription,
      reads: formik.values.reads,
      createdAt: serverTimestamp(),
      editedAt: serverTimestamp(),
    });
        console.log("HERE IS NEW POST ID", articleDocRef.id);

        const imageRef = ref(storage, `posts/${articleDocRef.id}/image`);
        await uploadString(imageRef, formik.values.imageUrl, "data_url");
        const downloadURL = await getDownloadURL(imageRef);
        await updateDoc(articleDocRef, {
          imageURL: downloadURL,
        });
        console.log("HERE IS DOWNLOAD URL", downloadURL);

        console.log("Article created");
        onClose();
        setShowModal(true);
      } catch (error) {
        console.error("Error creating article:", error);
        setShowModal(false);
      }

      formik.resetForm();
    }
  };

  const handleTagChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputTags = event.target.value.split(",");
    setTags(inputTags.map((tag) => tag.trim()));
  };

  const handleDescriptionChange = (value: string) => {
    formik.setFieldValue("description", value);
  };


  // Extract the image URL from the description
  const extractImageURL = () => {
    const tempContainer = document.createElement("div");
    tempContainer.innerHTML = formik.values.description;
    const imgElement = tempContainer.querySelector("img");
    if (imgElement) {
      const imageURL = imgElement.src;
      formik.setFieldValue("imageUrl", imageURL);
      console.log("Image URL:", imageURL);
    }
  };

  useEffect(() => {
    extractImageURL();
  }, [formik.values.description]);

  // Show article created modal for 1 second
  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => {
        setShowModal(false);
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [showModal]);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader display={"flex"} justifyContent={"space-between"} width={"100%"} mt={4}>
            Article
            <Button variant="unstyled" onClick={onClose} color={"blue.500"}>
              <IoIosClose size={30} />
            </Button>
          </ModalHeader>
          <ModalBody maxHeight="400px" overflowY="auto">
            <FormControl mb={4} isInvalid={formik.touched.title && formik.errors.title as any}>
              <FormLabel>Title</FormLabel>
              <Input
                placeholder="Enter article title"
                {...formik.getFieldProps("title")}
              />
              <FormErrorMessage>{formik.errors.title}</FormErrorMessage>
            </FormControl>
            <FormControl mb={4} isInvalid={formik.touched.category && formik.errors.category as any}>
  <FormLabel>Category</FormLabel>
  <Select
    placeholder="Select article category"
    {...formik.getFieldProps("category")}
  >
    <option value="weather">Weather</option>
    <option value="accidents">Accidents</option>
    <option value="general">General</option>
    <option value="technology">Technology</option>
    <option value="health">Health</option>
    <option value="business">Business</option>
  </Select>
  <FormErrorMessage>{formik.errors.category}</FormErrorMessage>
</FormControl>

            <FormControl mb={4} isInvalid={formik.touched.description && formik.errors.description as any}>
              <FormLabel>Description</FormLabel>
              <ReactQuill
                value={formik.values.description}
                onChange={handleDescriptionChange}
                modules={{
                  toolbar: [
                    [{ header: [1, 2, 3, 4, 5, 6, false] }],
                    ["bold", "italic", "underline", "strike"],
                    [{ list: "ordered" }, { list: "bullet" }],
                    ["blockquote", "code-block"],
                    ["link", "image"],
                  ],
                }}
              />
              <FormErrorMessage>{formik.errors.description}</FormErrorMessage>
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Tags</FormLabel>
              <Input
                placeholder="Enter article tags (comma-separated)"
                value={tags.join(", ")}
                onChange={handleTagChange}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter display={"flex"} justifyContent={"flex-start"} width={"100%"}>
            <Button colorScheme="blue" mr={3} onClick={formik.handleSubmit as any}>
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {showModal && (
        <Modal isOpen={showModal} onClose={() => setShowModal(false)} size="lg">
          <ModalOverlay />
          <ModalContent width={"500px"} height={"300px"} mt={20}>
            <ModalHeader display="flex" justifyContent="flex-end">
              <Button variant="unstyled" color={"blue.500"} onClick={() => setShowModal(false)}>
                <IoIosClose size={24} />
              </Button>
            </ModalHeader>
            <ModalBody textAlign="center" mt={"14"} fontSize={25}>
              Article created successfully!
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default CreateArticleForm;