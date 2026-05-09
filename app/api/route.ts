import { NextRequest, NextResponse } from "next/server";

const apiDocumentation = {
    title: "Bluehorse REST API",
    description: "REST API documentation for pages, comments, subscriptions, comics, and users.",
    basePath: "/api",
    endpoints: [
        {
            path: "/api/pages",
            methods: {
                GET: {
                    description: "List pages",
                    query: ["page", "limit", "comicId"],
                },
                POST: {
                    description: "Create a new page",
                    body: {
                        index: "number",
                        imageUri: "string (url)",
                        description: "string | optional",
                        comicId: "string",
                    },
                },
            },
        },
        {
            path: "/api/pages/[id]",
            methods: {
                GET: { description: "Get a single page by ID" },
                PUT: {
                    description: "Update a page",
                    body: {
                        index: "number | optional",
                        imageUri: "string (url) | optional",
                        description: "string | optional",
                    },
                },
                DELETE: { description: "Delete a page" },
            },
        },
        {
            path: "/api/comments",
            methods: {
                GET: {
                    description: "List comments",
                    query: ["page", "limit", "pageId", "authorId"],
                },
                POST: {
                    description: "Create a new comment",
                    body: {
                        content: "string",
                        isPinned: "boolean | optional",
                        pageId: "string",
                        authorId: "string",
                    },
                },
            },
        },
        {
            path: "/api/comments/[id]",
            methods: {
                GET: { description: "Get a single comment by ID" },
                PUT: {
                    description: "Update a comment",
                    body: {
                        content: "string | optional",
                        isPinned: "boolean | optional",
                    },
                },
                DELETE: { description: "Delete a comment" },
            },
        },
        {
            path: "/api/subscriptions",
            methods: {
                GET: {
                    description: "List subscriptions",
                    query: ["page", "limit", "userId", "comicId"],
                },
                POST: {
                    description: "Create a new subscription",
                    body: {
                        userId: "string",
                        comicId: "string",
                    },
                },
            },
        },
        {
            path: "/api/subscriptions/[id]",
            methods: {
                GET: { description: "Get a single subscription by ID" },
                PUT: {
                    description: "Update a subscription",
                    body: {
                        userId: "string | optional",
                        comicId: "string | optional",
                    },
                },
                DELETE: { description: "Delete a subscription" },
            },
        },
        {
            path: "/api/comics",
            methods: {
                GET: {
                    description: "List comics",
                    query: ["page", "limit", "authorId"],
                },
                POST: {
                    description: "Create a new comic",
                    body: {
                        title: "string",
                        description: "string",
                        authorId: "string",
                        status: "string",
                        thumbnailUri: "string | optional",
                    },
                },
            },
        },
        {
            path: "/api/comics/[id]",
            methods: {
                GET: { description: "Get a single comic by ID" },
                PUT: {
                    description: "Update a comic",
                    body: {
                        title: "string | optional",
                        description: "string | optional",
                        thumbnailUri: "string | optional",
                        status: "string | optional",
                    },
                },
                DELETE: { description: "Delete a comic" },
            },
        },
        {
            path: "/api/users",
            methods: {
                GET: {
                    description: "List users",
                    query: ["page", "limit"],
                },
                POST: {
                    description: "Create a new user",
                    body: {
                        username: "string",
                        description: "string | optional",
                        imageUri: "string | optional",
                    },
                },
            },
        },
        {
            path: "/api/users/[id]",
            methods: {
                GET: { description: "Get a single user by ID" },
                PUT: {
                    description: "Update a user",
                    body: {
                        username: "string | optional",
                        description: "string | optional",
                        imageUri: "string | optional",
                    },
                },
                DELETE: { description: "Delete a user" },
            },
        },
    ],
};

export async function GET(request: NextRequest) {
    return NextResponse.json(apiDocumentation);
}
