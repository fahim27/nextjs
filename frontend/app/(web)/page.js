import { getPosts } from "@/services/api/request/web";
import React from "react";

export default async function Page() {
  const posts = await getPosts();
  return (
    <section className="py-5">
      <div className="container">
        <h1 className="text-2xl font-bold mb-4">Posts</h1>
        <div className="my-5">
          <hr />
          <hr />
        </div>
        <div className="row gy-4">
          {posts && posts.length > 0 ? (
            posts.map((post) => (
              <div key={post.id} className="col-12 mb-3">
                <div className="card">
                  <div className="card-header">
                    <h2 className="text-lg font-semibold">{post.title}</h2>
                  </div>
                  <div className="card-body">
                    <p>{post.body}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center text-muted py-5">
              <p>No posts found.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
