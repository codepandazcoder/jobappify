import React from "react";
import { useLoaderData, useNavigation, Link } from "react-router-dom";

const PostsPage = () => {
  const result = useLoaderData();
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <h1>Loading!</h1>;
  }
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          All Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {result.map((res) => (
            <div key={res.id}>
              <div className="bg-white rounded-xl shadow-md relative">
                <div className="p-4">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold">{res.title}</h3>
                  </div>
                  <div className="mb-5">{res.body}</div>
                  <div className="border border-gray-100 mb-5"></div>
                  <div className="flex flex-col lg:flex-row justify-between mb-4">
                    <Link
                      to={`/posts/${res.id}`}
                      className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PostsPage;
