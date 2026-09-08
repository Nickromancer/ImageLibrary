import { useState } from "react";

interface UploadedImage {
    id: string;
    name: string;
    description: string;
    contentType: string;
}

export function ImageUpload() {
    const [file, setFile] = useState<File | null>(null);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [preview, setPreview] = useState<string | null>(null);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selected = e.target.files?.[0] ?? null;
        setFile(selected);
        setPreview(selected ? URL.createObjectURL(selected) : null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!file) {
            setError("Please select a file.");
            return;
        }

        setUploading(true);
        setError(null);

        const formData = new FormData();
        formData.append("file", file);
        formData.append("name", name);
        formData.append("description", description);

        try {
            const res = await fetch("/api/image", {
                method: "POST",
                body: formData,
            });

            if (!res.ok) {
                throw new Error(`Upload failed: ${res.status}`);
            }

            const result: UploadedImage = await res.json();
            console.log("Uploaded:", result);

            // reset form
            setFile(null);
            setName("");
            setDescription("");
            setPreview(null);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Upload failed.");
        } finally {
            setUploading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
            <div>
                <label>Image file</label>
                <input type="file" accept="image/*" onChange={handleFileChange} />
            </div>

            {preview && (
                <img
                    src={preview}
                    alt="Preview"
                    style={{ maxWidth: "100%", marginTop: 8, marginBottom: 8 }}
                />
            )}

            <div>
                <label>Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>

            <div>
                <label>Description</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <button type="submit" disabled={uploading}>
                {uploading ? "Uploading..." : "Upload"}
            </button>
        </form>
    );
}

export default ImageUpload;