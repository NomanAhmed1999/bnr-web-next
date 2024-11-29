'use client';

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { useEffect, useState } from "react";
// import { AppSidebar } from "@/components/app-sidebar"



const EditForm = () => {
  const [formData, setFormData] = useState<any>({});

  useEffect(() => {
    fetch("/api/content")
      .then((res) => res.json())
      .then((data) => {
        const parsedData = data.reduce((acc: any, item: any) => {
          acc[item.section] = JSON.parse(item.content);
          return acc;
        }, {});
        setFormData(parsedData);
      });
  }, []);

  const handleInputChange = (section: string, field: string, value: any) => {
    setFormData((prev: any) => ({
      ...prev,
      [section]: { ...prev[section], [field]: value },
    }));
  };

  const handleSave = async () => {
    await fetch("/api/content", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    alert("Content updated successfully!");
  };

  return (
    <div>
      <h1>Edit Content</h1>
      <div>
        <h2>Hero Section</h2>
        <label>Words</label>
        <input
          type="text"
          value={formData.heroWords?.words?.join(", ") || ""}
          onChange={(e) =>
            handleInputChange("heroWords", "words", e.target.value.split(","))
          }
        />
        <label>Colors</label>
        <input
          type="text"
          value={formData.heroWords?.colors?.join(", ") || ""}
          onChange={(e) =>
            handleInputChange("heroWords", "colors", e.target.value.split(","))
          }
        />
      </div>
      <div>
        <h2>Offerings</h2>
        {formData.offerings?.map((offering: any, index: number) => (
          <div key={index}>
            <label>Title</label>
            <input
              type="text"
              value={offering.title || ""}
              onChange={(e) => {
                const updatedOfferings = [...formData.offerings];
                updatedOfferings[index].title = e.target.value;
                handleInputChange("offerings", "offerings", updatedOfferings);
              }}
            />
          </div>
        ))}
      </div>
      {/* Add similar inputs for products, testimonials, etc. */}
      <button onClick={handleSave}>Save</button>
    </div>

  );
};

export default EditForm;
