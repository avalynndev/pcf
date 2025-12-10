"use client";
import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import { majors } from "@/config/majors";
import ProjCard from "@/components/project-card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const firebaseConfig = {
  apiKey: "-",
  authDomain: "",
  projectId: "id",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


export default function ProjectHub() {
  const [posts, setPosts] = useState<[string, any][]>([]);
  const [filteredPosts, setFilteredPosts] = useState<[string, any][]>([]);
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const postsRef = ref(database, "posts/");
    onValue(postsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const postEntries = Object.entries(data) as [string, any][];
        setPosts(postEntries);
        setFilteredPosts(postEntries);
      } else {
        setPosts([]);
        setFilteredPosts([]);
      }
    });
  }, []);


  const filterChange = (value: string): void => {
    setSelectedFilter(value);
    applyFilters(value, searchQuery);
    if (value.toLowerCase() === "all") {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(
        posts.filter(
          ([, post]) =>
            String(post.fieldInterest || "").toLowerCase() ===
            value.toLowerCase(),
        ),
      );
    }
  };

  const applyFilters = (filter: string, search: string) => {
    const lowerFilter = filter.toLowerCase();
    const lowerSearch = search.toLowerCase();

    const filtered = posts.filter(([, post]) => {
      const matchesFilter =
        lowerFilter === "all" ||
        String(post.fieldInterest || "").toLowerCase() === lowerFilter;

      const matchesSearch =
        post.projectTitle?.toLowerCase().includes(lowerSearch) ||
        post.projectDesc?.toLowerCase().includes(lowerSearch) ||
        post.name?.toLowerCase().includes(lowerSearch) ||
        post.contactInfo?.toLowerCase().includes(lowerSearch) ||
        (Array.isArray(post.tags)
          ? post.tags.some((tag: any) =>
              tag.toLowerCase().includes(lowerSearch),
            )
          : false);

      return matchesFilter && matchesSearch;
    });

    setFilteredPosts(filtered);
  };

  return (
    <div className="relative flex w-full flex-col items-center justify-center">
      <span className="pointer-events-none mt-8 whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text pt-8 pb-4 text-center text-[100px] font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Projects
      </span>

      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text p-4 pb-4 text-center">
        Choose to get involved with somebody&apos;s passion project, or start
        your own! The choice is yours! {`:)`}
      </span>
      <Link href="https://ko-fi.com/s/07f67a4669">
        <Button size="lg" variant="rainbow">
          Add Your project!
        </Button>
      </Link>
      <div className="my-4 flex mx-auto w-full max-w-6xl px-8 flex-wrap items-center justify-between gap-4 px-4">
        <Input
          type="search"
          placeholder="Search posts..."
          value={searchQuery}
          onChange={(e) => {
            const value = e.target.value;
            setSearchQuery(value);
            applyFilters(selectedFilter, value);
          }}
          className="md:w-[calc(100%-180px)] rounded-md border p-4 text-sm shadow-sm"
        />
        <Select value={selectedFilter} onValueChange={filterChange}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Select a field" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            {majors.map((major) => (
              <SelectItem key={major.value} value={major.value}>
                {major.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="mx-auto w-full max-w-6xl p-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map(([id, post]) => (
            <ProjCard
              key={id}
              id={id}
              projName={post.projectTitle}
              projDesc={post.projectDesc}
              userContact={post.contactInfo}
              fieldOfInterest={post.fieldInterest}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
