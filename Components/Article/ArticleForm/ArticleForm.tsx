import { SetStateAction, useState, useRef, forwardRef, useEffect } from "react";
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
  Box,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { IoIosClose } from "react-icons/io";
import { app, firestore } from "@/firebase/clientApp";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface CreateArticleFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateArticleForm = forwardRef<HTMLDivElement, CreateArticleFormProps>(
  ({ isOpen, onClose }: CreateArticleFormProps, ref) => {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [tags, setTags] = useState<string[]>([]);
    const quillRef = useRef<any>(null);

    const handleCreateArticle = async () => {
      try {
        // Get the Firebase Firestore instance
        const firestore = getFirestore();
    
        // Create a new article document in the "articles" collection
        const articlesCollection = collection(firestore, "articles");
        await addDoc(articlesCollection, {
          title,
          category,
          description,
        });
    
        console.log("Article created");
        onClose();
        setShowModal(true);
      } catch (error) {
        console.error("Error creating article:", error);
        setShowModal(false);
      }
    
      setTitle("");
      setCategory("");
      setDescription("");
      setTags([]);
    };
    

    const handleTagChange = (event: { target: { value: string } }) => {
      const inputTags = event.target.value.split(",");
      setTags(inputTags.map((tag) => tag.trim()));
    };

    const handleDescriptionChange = (value: string) => {
      setDescription(value);
    };

    console.log("tags", tags);
    console.log("description", description);
    console.log("category", category);
    console.log("title", title);
    
    
    
    
    

    const uploadImage = async (file: File) => {
      try {
        const formData = new FormData();
        formData.append("image", file);

        const response = await axios.post("/api/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        return response.data.imageUrl; // Assuming the response contains the uploaded image URL
      } catch (error) {
        console.error("Error uploading image:", error);
        // Handle error appropriately
      }
    };

    const handleImageUpload = async () => {
      const input = document.createElement("input");
      input.type = "file";
      input.accept = "image/*";
      input.onchange = async () => {
        const file = input.files && input.files[0];
        if (file) {
          const imageUrl = await uploadImage(file);
          if (quillRef.current) {
            const range = quillRef.current.getEditorSelection();
            quillRef.current.setEditorSelection(range.index, 0); // Set selection to the beginning
            quillRef.current.insertEmbed(range.index, "image", imageUrl);
          }
        }
      };
      input.click();
    };

    // show article created modal for 1 second
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
            <ModalHeader display={'flex' } justifyContent={'space-between'} width={'100%'} mt={4}>
                Article
            <Button variant="unstyled" onClick={onClose} color={"blue.500"}>
                <IoIosClose size={30}/>
            </Button>
                </ModalHeader>
          <ModalBody maxHeight="400px" overflowY="auto">
            <FormControl mb={4}>
              <FormLabel>Title</FormLabel>
              <Input
                placeholder="Enter article title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Category</FormLabel>
              <Input
                placeholder="Enter article category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Description</FormLabel>

              <ReactQuill
                value={description}
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
          <ModalFooter  display={'flex' } justifyContent={'flex-start'} width={'100%'}>
            <Button colorScheme="blue" mr={3} onClick={handleCreateArticle}>
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {showModal && (
  <Modal isOpen={showModal} onClose={() => setShowModal(false)} size="lg">
    <ModalOverlay />
    <ModalContent width={'500px'} height={'300px'} mt={20}>
      <ModalHeader display="flex" justifyContent="flex-end">
        <Button variant="unstyled" color={'blue.500'} onClick={() => setShowModal(false)}>
          <IoIosClose size={24} />
        </Button>
      </ModalHeader>
      <ModalBody textAlign="center" mt={'14'} fontSize={25}>
        Article created successfully!
      </ModalBody>
    </ModalContent>
  </Modal>
)}

      </>
    );
  }
);

export default CreateArticleForm;
