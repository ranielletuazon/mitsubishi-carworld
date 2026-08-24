import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const ADMIN_USERNAME = "cwadmin";
const ADMIN_PASSWORD = "password";
const ADMIN_SECRET =
    "cw_9f2e7a1d4b6c8034ff21a5e9c7d3b0912ea4f88b3c1d5670abf1234567890ef";

export default function NewsPoster() {
    const [authenticated, setAuthenticated] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState<string | null>(null);

    const [category, setCategory] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState<"draft" | "published">("draft");
    const [publishedDate, setPublishedDate] = useState("");
    const [imageFile, setImageFile] = useState<File | null>(null);

    const [submitting, setSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
            setAuthenticated(true);
            setLoginError(null);
        } else {
            setLoginError("Invalid username or password.");
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitError(null);
        setSubmitSuccess(null);

        if (!imageFile) {
            setSubmitError("Please select an image.");
            return;
        }

        setSubmitting(true);

        const formData = new FormData();
        formData.append("admin_secret", ADMIN_SECRET);
        formData.append("category", category);
        formData.append("title", title);
        formData.append("description", description);
        formData.append("status", status);
        formData.append("published_date", publishedDate);
        formData.append("image", imageFile);

        try {
            const res = await fetch(
                `https://mitsubishicarworld.com.ph/api/post_news.php`,
                {
                    method: "POST",
                    body: formData,
                },
            );
            const data = await res.json();

            if (!res.ok) {
                setSubmitError(data.error || "Failed to post news.");
                return;
            }

            setSubmitSuccess(`Posted: "${title}"`);
            setCategory("");
            setTitle("");
            setDescription("");
            setStatus("draft");
            setPublishedDate("");
            setImageFile(null);
        } catch {
            setSubmitError("Could not reach the server.");
        } finally {
            setSubmitting(false);
        }
    };

    if (!authenticated) {
        return (
            <>
                <Header />
                <main className="w-full max-w-full bg-white">
                    <section className="container mx-auto px-4 py-20 max-w-sm">
                        <h1 className="text-xl font-black uppercase tracking-tight text-gray-900 mb-6 text-center">
                            Admin Login
                        </h1>
                        <form
                            onSubmit={handleLogin}
                            className="flex flex-col gap-4"
                        >
                            <input
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-red-600"
                                required
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-red-600"
                                required
                            />
                            {loginError && (
                                <p className="text-xs text-red-600">
                                    {loginError}
                                </p>
                            )}
                            <button
                                type="submit"
                                className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-widest py-3 transition-colors duration-200 cursor-pointer"
                            >
                                Log In
                            </button>
                        </form>
                    </section>
                </main>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Header />
            <main className="w-full max-w-full bg-white">
                <section className="container mx-auto px-4 py-16 max-w-xl">
                    <h1 className="text-xl font-black uppercase tracking-tight text-gray-900 mb-8">
                        Post News
                    </h1>

                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-5"
                    >
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5">
                                Category
                            </label>
                            <input
                                type="text"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-red-600"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5">
                                Title
                            </label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-red-600"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5">
                                Description
                            </label>
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                rows={4}
                                className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-red-600 resize-none"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5">
                                Image
                            </label>
                            <input
                                type="file"
                                accept="image/jpeg,image/png,image/webp"
                                onChange={(e) =>
                                    setImageFile(e.target.files?.[0] ?? null)
                                }
                                className="w-full border border-gray-300 px-4 py-2.5 text-sm file:mr-4 file:border-0 file:bg-gray-100 file:px-3 file:py-1.5 file:text-xs file:uppercase file:tracking-wide"
                                required
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5">
                                    Status
                                </label>
                                <select
                                    value={status}
                                    onChange={(e) =>
                                        setStatus(
                                            e.target.value as
                                                | "draft"
                                                | "published",
                                        )
                                    }
                                    className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-red-600"
                                >
                                    <option value="draft">Draft</option>
                                    <option value="published">Published</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5">
                                    Published Date
                                </label>
                                <input
                                    type="date"
                                    value={publishedDate}
                                    onChange={(e) =>
                                        setPublishedDate(e.target.value)
                                    }
                                    className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-red-600"
                                    required
                                />
                            </div>
                        </div>

                        {submitError && (
                            <p className="text-xs text-red-600">
                                {submitError}
                            </p>
                        )}
                        {submitSuccess && (
                            <p className="text-xs text-green-700">
                                {submitSuccess}
                            </p>
                        )}

                        <button
                            type="submit"
                            disabled={submitting}
                            className="bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white text-xs font-bold uppercase tracking-widest py-3.5 transition-colors duration-200 cursor-pointer"
                        >
                            {submitting ? "Posting..." : "Post News"}
                        </button>
                    </form>
                </section>
            </main>
            <Footer />
        </>
    );
}
