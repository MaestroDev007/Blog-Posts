import axios from "axios";

export const fetchBlogPosts = async () => {
    const FIRESTORE_BASE_URL = process.env.NEXT_PUBLIC_FIRESTORE_BASE_URL;
    const COLLECTION_PATH = "blogs";

    try {
        const response = await axios.get(`${FIRESTORE_BASE_URL}/${COLLECTION_PATH}`);
        const documents = response?.data?.documents; 
        if (!documents) throw new Error("No documents found in response");
        
        const blogPosts = documents.map((doc) => ({
            id: doc.name.split("/").pop(),
            title: doc.fields.title?.stringValue,
            content: doc.fields.content?.stringValue,
        }));
        
        return blogPosts;
        
    } catch (error) {
        console.error("Error fetching blog posts:", error);
        throw new Error("Failed to fetch blog posts");
    }
}