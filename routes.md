# API Routes

## Users

| Method | Route | Description | Auth |
|---|---|---|---|
| `GET` | `/api/users/[id]` | Get public profile | — |
| `PATCH` | `/api/users/[id]` | Update profile (name, about, avatar) | Required |

---

## Comics

| Method | Route | Description | Auth |
|---|---|---|---|
| `GET` | `/api/comics` | Browse all comics | — |
| `POST` | `/api/comics` | Create a comic | Required |
| `GET` | `/api/comics/[id]` | Get comic details | — |
| `PATCH` | `/api/comics/[id]` | Update comic (title, description, status) | Owner |
| `DELETE` | `/api/comics/[id]` | Delete comic | Owner |
| `GET` | `/api/users/[id]/comics` | Get all comics by a user | — |

---

## Pages

| Method | Route | Description | Auth |
|---|---|---|---|
| `GET` | `/api/comics/[id]/pages` | Get all pages for a comic | — |
| `POST` | `/api/comics/[id]/pages` | Upload new page | Owner |
| `GET` | `/api/comics/[id]/pages/[page]` | Get single page | — |
| `PATCH` | `/api/comics/[id]/pages/[page]` | Update page (author_note, page_number) | Owner |
| `DELETE` | `/api/comics/[id]/pages/[page]` | Delete page | Owner |

---

## Comments

| Method | Route | Description | Auth |
|---|---|---|---|
| `GET` | `/api/comics/[id]/pages/[page]/comments` | Get comments for a page | — |
| `POST` | `/api/comics/[id]/pages/[page]/comments` | Post a comment | Required |
| `DELETE` | `/api/comics/[id]/pages/[page]/comments/[id]` | Delete a comment | Owner |
| `PATCH` | `/api/comments/[id]/pin` | Pin or unpin a comment | Comic Owner |

---

## Subscriptions

| Method | Route | Description | Auth |
|---|---|---|---|
| `GET` | `/api/users/[id]/subscriptions` | Get user's subscribed comics | Required |
| `POST` | `/api/comics/[id]/subscribe` | Subscribe to a comic | Required |
| `DELETE` | `/api/comics/[id]/subscribe` | Unsubscribe from a comic | Required |

---

## Query Params

### `GET /api/comics`
| Param | Type | Values | Default |
|---|---|---|---|
| `status` | string | `ongoing`, `finished`, `hiatus` | — |
| `sort` | string | `latest`, `popular`, `subscriptions` | `latest` |
| `q` | string | search term | — |
| `limit` | number | 1–100 | `20` |
| `cursor` | string | last seen ID | — |

### `GET /api/comics/[id]/pages`
| Param | Type | Values | Default |
|---|---|---|---|
| `order` | string | `asc`, `desc` | `asc` |

### `GET /api/comics/[id]/pages/[page]/comments`
| Param | Type | Values | Default |
|---|---|---|---|
| `limit` | number | 1–100 | `20` |
| `cursor` | string | last seen ID | — |

### `GET /api/users/[id]/subscriptions`
| Param | Type | Values | Default |
|---|---|---|---|
| `limit` | number | 1–100 | `20` |
| `cursor` | string | last seen ID | — |

---

## Auth Levels

| Level | Description |
|---|---|
| — | Public, no auth needed |
| Required | Must be logged in |
| Owner | Must be the resource owner |
| Comic Owner | Must own the comic the resource belongs to |

---

## Notes

- All mutating routes verify session server-side
- Ownership checks are done server-side — never trust client-sent user IDs
- Image uploads go directly to storage (S3/R2); only the resulting URI is sent to the API
- All list endpoints use cursor-based pagination — a response shorter than `limit` means end of results
- Pinned comments are always returned first, no client param needed