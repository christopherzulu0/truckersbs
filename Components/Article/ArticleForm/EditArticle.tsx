import { useState, useEffect } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { IoIosClose } from "react-icons/io";
import { app, firestore, storage } from "@/firebase/clientApp";
import { doc, getFirestore, updateDoc } from "firebase/firestore";
import { ref, uploadString, getDownloadURL, uploadBytes } from "firebase/storage";
import { useFormik } from "formik";
import * as Yup from "yup";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface EditArticleFormProps {
  isOpen: boolean;
  onClose: () => void;
  articleId: string;
  initialValues?: {
    title: string;
    category: string;
    description: string;
    imageURL: string;
  };
}

const EditArticleForm: React.FC<EditArticleFormProps> = ({
  isOpen,
  onClose,
  articleId,
  initialValues,
}: EditArticleFormProps) => {
  const [showModal, setShowModal] = useState(false);
  const [tags, setTags] = useState<string[]>([]);

  const handleEditArticle = async (values: {
    description: string;
    title: any;
    category: string;
    imageURL: string;
  }) => {
    try {
      // Get the Firebase Firestore instance
      const firestore = getFirestore();

      // Update the article document in the "articles" collection
      const articleRef = doc(firestore, "articles", articleId);
      const updateData: any = {};

      // Update fields if provided
      if (values.title) {
        updateData.title = values.title;
      }
      if (values.category) {
        updateData.category = values.category;
      }
      if (values.imageURL) {
        updateData.imageURL = values.imageURL;
      }
      if (values.description) {
        // Clean the description from the Quill editor
        const parser = new DOMParser();
        const docx = parser.parseFromString(values.description, "text/html");
        const paragraphs = Array.from(docx.querySelectorAll("p"));
        const cleanDescription = paragraphs
          .map((p) => p.textContent)
          .join("\n\n");
        updateData.description = cleanDescription;
      }

      await updateDoc(articleRef, updateData);

      console.log("Article updated");
      onClose();
      setShowModal(true);
    } catch (error) {
      console.error("Error updating article:", error);
      setShowModal(false);
    }

    formik.resetForm();
    setTags([]);
  };

  const validationSchema = Yup.object({
    title: Yup.string(),
    category: Yup.string(),
    description: Yup.string(),
    imageURL: Yup.string(),
  });

  const formik = useFormik({
    initialValues: initialValues || {
      title: "",
      category: "",
      description: "",
      imageURL: "",
    },
    validationSchema,
    onSubmit: handleEditArticle,
  });

  const handleTagChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputTags = event.target.value.split(",");
    setTags(inputTags.map((tag) => tag.trim()));
  };

  const handleDescriptionChange = (value: string) => {
    formik.setFieldValue("description", value);
  };

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file: any = event.target.files?.[0];
    if (file) {
      try {
        // Create a storage reference with a unique filename
        const storageRef = ref(storage, `posts/${articleId}/image`);
        const snapshot = await uploadBytes(storageRef, file);
  
        // Get the download URL of the uploaded image
        const downloadURL = await getDownloadURL(snapshot.ref);
  
        // Set the imageURL field in the formik form values
        formik.setFieldValue("imageURL", downloadURL);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };
  

  useEffect(() => {
    formik.setFieldValue("title", initialValues?.title || "");
    formik.setFieldValue("category", initialValues?.category || "");
    formik.setFieldValue("description", initialValues?.description || "");
    formik.setFieldValue("imageURL", initialValues?.imageURL || "");
  }, [initialValues]);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            display={"flex"}
            justifyContent={"space-between"}
            width={"100%"}
            mt={4}
          >
            Edit Article
            <Button variant="unstyled" onClick={onClose} color={"blue.500"}>
              <IoIosClose size={30} />
            </Button>
          </ModalHeader>
          <ModalBody maxHeight="400px" overflowY="auto">
            <FormControl
              mb={4}
              isInvalid={formik.touched.title && (formik.errors.title as any)}
            >
              <FormLabel>Title</FormLabel>
              <Input
                placeholder="Enter article title"
                {...formik.getFieldProps("title")}
              />
              <FormErrorMessage>{formik.errors.title}</FormErrorMessage>
            </FormControl>
            <FormControl
              mb={4}
              isInvalid={
                formik.touched.category && (formik.errors.category as any)
              }
            >
              <FormLabel>Category</FormLabel>
              <Input
                placeholder="Enter article category"
                {...formik.getFieldProps("category")}
              />
              <FormErrorMessage>{formik.errors.category}</FormErrorMessage>
            </FormControl>
            <FormControl
              mb={4}
              isInvalid={
                formik.touched.description && (formik.errors.description as any)
              }
            >
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
            <FormControl>
  <FormLabel>Image</FormLabel>
  <Input type="file" onChange={handleImageUpload} accept="image/*" />
  <FormHelperText>Select a new image for the article</FormHelperText>
</FormControl>
          </ModalBody>
          <ModalFooter
            display={"flex"}
            justifyContent={"flex-start"}
            width={"100%"}
          >
            <Button
              colorScheme="blue"
              mr={3}
              onClick={formik.handleSubmit as any}
            >
              Update
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {showModal && (
        <Modal isOpen={showModal} onClose={() => setShowModal(false)} size="lg">
          <ModalOverlay />
          <ModalContent width={"500px"} height={"300px"} mt={20}>
            <ModalHeader display="flex" justifyContent="flex-end">
              <Button
                variant="unstyled"
                color={"blue.500"}
                onClick={() => setShowModal(false)}
              >
                <IoIosClose size={24} />
              </Button>
            </ModalHeader>
            <ModalBody textAlign="center" mt={"14"} fontSize={25}>
              Article updated successfully!
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default EditArticleForm;



