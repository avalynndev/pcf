import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { getDatabase, ref, set } from "firebase/database";
import { v4 as uuidv4 } from "uuid";

interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = React.useState("");
  const [projectTitle, setProjectTitle] = React.useState("");
  const [projectDesc, setProjectDesc] = React.useState("");
  const [contactInfo, setContactInfo] = React.useState("");
  const [fieldInterest, setFieldInterest] = React.useState("");

  const submitPost = () => {
    const db = getDatabase();
    const id = uuidv4();
    const postRef = ref(db, `posts/${id}`);

    set(postRef, {
      name,
      projectTitle,
      projectDesc,
      contactInfo,
      fieldInterest,
    }).then(() => {
      onClose();
      setName("");
      setProjectTitle("");
      setProjectDesc("");
      setContactInfo("");
      setFieldInterest("");
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Submit Your Project</DialogTitle>
        </DialogHeader>
        <Input
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Project Title"
          value={projectTitle}
          onChange={(e) => setProjectTitle(e.target.value)}
        />
        <Textarea
          placeholder="Project Description"
          value={projectDesc}
          onChange={(e) => setProjectDesc(e.target.value)}
        />
        <Input
          placeholder="Contact Info"
          value={contactInfo}
          onChange={(e) => setContactInfo(e.target.value)}
        />
        <Input
          placeholder="Field of Interest"
          value={fieldInterest}
          onChange={(e) => setFieldInterest(e.target.value)}
        />
        <Button onClick={submitPost}>Submit</Button>
      </DialogContent>
    </Dialog>
  );
};

export default PostModal;
