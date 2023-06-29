// import { SetStateAction, useState, useRef, forwardRef, useEffect } from "react";
// import {
//   Button,
//   FormControl,
//   FormLabel,
//   Input,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   Box,
// } from "@chakra-ui/react";
// import dynamic from "next/dynamic";
// import "react-quill/dist/quill.snow.css";
// import { IoIosClose } from "react-icons/io";
// import { app, firestore } from "@/firebase/clientApp";
// import { addDoc, collection, getFirestore } from "firebase/firestore";

// const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

// interface CreateArticleFormProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const CreateArticleForm = forwardRef<HTMLDivElement, CreateArticleFormProps>(
//   ({ isOpen, onClose }: CreateArticleFormProps, ref) => {
//     const [title, setTitle] = useState("");
//     const [category, setCategory] = useState("");
//     const [description, setDescription] = useState("");
//     const [showModal, setShowModal] = useState(false);
//     const [tags, setTags] = useState<string[]>([]);

//     const handleCreateArticle = async () => {
//       try {
//         // Get the Firebase Firestore instance
//         const firestore = getFirestore();
    
//         // Create a new article document in the "articles" collection
//         const articlesCollection = collection(firestore, "articles");
//         await addDoc(articlesCollection, {
//           title,
//           category,
//           description,
//         });
    
//         console.log("Article created");
//         onClose();
//         setShowModal(true);
//       } catch (error) {
//         console.error("Error creating article:", error);
//         setShowModal(false);
//       }
    
//       setTitle("");
//       setCategory("");
//       setDescription("");
//       setTags([]);
//     };
    

//     const handleTagChange = (event: { target: { value: string } }) => {
//       const inputTags = event.target.value.split(",");
//       setTags(inputTags.map((tag) => tag.trim()));
//     };

//     const handleDescriptionChange = (value: string) => {
//       setDescription(value);
//     };

//     console.log("tags", tags);
//     console.log("description", description);
//     console.log("category", category);
//     console.log("title", title);
 

//     // show article created modal for 1 second
//     useEffect(() => {
//         if (showModal) {
//           const timer = setTimeout(() => {
//             setShowModal(false);
//           }, 5000);
    
//           return () => {
//             clearTimeout(timer);
//           };
//         }
//       }, [showModal]);

//     return (
//     <>
//       <Modal isOpen={isOpen} onClose={onClose} size="xl">
//         <ModalOverlay />
//         <ModalContent>
//             <ModalHeader display={'flex' } justifyContent={'space-between'} width={'100%'} mt={4}>
//                 Article
//             <Button variant="unstyled" onClick={onClose} color={"blue.500"}>
//                 <IoIosClose size={30}/>
//             </Button>
//                 </ModalHeader>
//           <ModalBody maxHeight="400px" overflowY="auto">
//             <FormControl mb={4}>
//               <FormLabel>Title</FormLabel>
//               <Input
//                 placeholder="Enter article title"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//               />
//             </FormControl>
//             <FormControl mb={4}>
//               <FormLabel>Category</FormLabel>
//               <Input
//                 placeholder="Enter article category"
//                 value={category}
//                 onChange={(e) => setCategory(e.target.value)}
//               />
//             </FormControl>
//             <FormControl mb={4}>
//               <FormLabel>Description</FormLabel>

//               <ReactQuill
//                 value={description}
//                 onChange={handleDescriptionChange}
//                 modules={{
//                   toolbar: [
//                     [{ header: [1, 2, 3, 4, 5, 6, false] }],
//                     ["bold", "italic", "underline", "strike"],
//                     [{ list: "ordered" }, { list: "bullet" }],
//                     ["blockquote", "code-block"],
//                     ["link", "image"],
//                   ],
//                 }}
//               />
//             </FormControl>

//             <FormControl mb={4}>
//               <FormLabel>Tags</FormLabel>
//               <Input
//                 placeholder="Enter article tags (comma-separated)"
//                 value={tags.join(", ")}
//                 onChange={handleTagChange}
//               />
//             </FormControl>
//           </ModalBody>
//           <ModalFooter  display={'flex' } justifyContent={'flex-start'} width={'100%'}>
//             <Button colorScheme="blue" mr={3} onClick={handleCreateArticle}>
//               Create
//             </Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>

//       {showModal && (
//   <Modal isOpen={showModal} onClose={() => setShowModal(false)} size="lg">
//     <ModalOverlay />
//     <ModalContent width={'500px'} height={'300px'} mt={20}>
//       <ModalHeader display="flex" justifyContent="flex-end">
//         <Button variant="unstyled" color={'blue.500'} onClick={() => setShowModal(false)}>
//           <IoIosClose size={24} />
//         </Button>
//       </ModalHeader>
//       <ModalBody textAlign="center" mt={'14'} fontSize={25}>
//         Article created successfully!
//       </ModalBody>
//     </ModalContent>
//   </Modal>
// )}

//       </>
//     );
//   }
// );

// export default CreateArticleForm;

import { useState, useEffect } from "react";
import { Button, FormControl, FormLabel, Input, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { IoIosClose } from "react-icons/io";
import { app, firestore, storage } from "@/firebase/clientApp";
import { addDoc, collection, getFirestore, serverTimestamp, updateDoc } from "firebase/firestore";
import { ref, uploadString, getDownloadURL } from "firebase/storage";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface CreateArticleFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateArticleForm: React.FC<CreateArticleFormProps> = ({ isOpen, onClose }: CreateArticleFormProps) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [tags, setTags] = useState<string[]>([]);

  const handleCreateArticle = async () => {
    try {
      // Get the Firebase Firestore instance
      const firestore = getFirestore();

      // clean the description from the quill editor
      const parser = new DOMParser();
      const doc = parser.parseFromString(description, "text/html");
      const cleanDescription = doc.querySelector("p")?.textContent;
      // Create a new article document in the "articles" collection
      const articleDocRef = await addDoc(collection(firestore, "articles"), {
        // creatorId: user.uid,
        title,
        category,
        description: cleanDescription,
        voteStatus: 0,
        createdAt: serverTimestamp(),
        editedAt: serverTimestamp(),
      });

      console.log("HERE IS NEW POST ID", articleDocRef.id);

      const imageRef = ref(storage, `posts/${articleDocRef.id}/image`);
      await uploadString(imageRef, imageUrl, "data_url");
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

    setTitle("");
    setCategory("");
    setDescription("");
    setImageUrl("");
    setTags([]);
  };

  const handleTagChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
  console.log("imageUrl", imageUrl);

  // Extract the image URL from the description
  const extractImageURL = () => {
    const tempContainer = document.createElement("div");
    tempContainer.innerHTML = description;
    const imgElement = tempContainer.querySelector("img");
    if (imgElement) {
      const imageURL = imgElement.src;
      setImageUrl(imageURL);
      console.log("Image URL:", imageURL);
    }
  };

  // Function to upload an image
// const uploadImage = async (file: { name: any; }) => {
//   try {
//     const storageRef = storage.ref();
//     const imageRef = storageRef.child(file.name);
//     await imageRef.put(file);
//     console.log('Image uploaded successfully');
//   } catch (error) {
//     console.error('Error uploading image:', error);
//   }
// };

// // Function to retrieve an image URL
// const getImageUrl = async (imageName: any) => {
//   try {
//     const storageRef = storage.ref();
//     const imageRef = storageRef.child(imageName);
//     const url = await imageRef.getDownloadURL();
//     console.log('Image URL:', url);
//     return url;
//   } catch (error) {
//     console.error('Error getting image URL:', error);
//     return null;
//   }
// };

  useEffect(() => {
    extractImageURL();
  }, [description]);

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
            <FormControl mb={4}>
              <FormLabel>Title</FormLabel>
              <Input placeholder="Enter article title" value={title} onChange={(e) => setTitle(e.target.value)} />
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
          <ModalFooter display={"flex"} justifyContent={"flex-start"} width={"100%"}>
            <Button colorScheme="blue" mr={3} onClick={handleCreateArticle}>
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

