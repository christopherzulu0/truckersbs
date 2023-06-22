import { SetStateAction, useState, useRef, forwardRef } from "react";
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
    const [value, setValue] = useState("");
    const [tags, setTags] = useState<string[]>([]);
    const quillRef = useRef<any>(null);

    const handleCreateArticle = () => {
      // Handle article creation logic here
      console.log("Article created");
      // Reset form fields
      setTitle("");
      setCategory("");
      setDescription("");
      setTags([]);
      // Close the modal
      onClose();
    };

    const handleTagChange = (event: { target: { value: string } }) => {
      const inputTags = event.target.value.split(",");
      setTags(inputTags.map((tag) => tag.trim()));
    };

    const handleDescriptionChange = (value: string) => {
      setDescription(value);
    };

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

    return (
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
    );
  }
);

export default CreateArticleForm;
