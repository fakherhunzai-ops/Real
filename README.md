# Horizon Consults

A responsive React/Vite site with an Express endpoint for enquiries and call requests.

## Run locally

```sh
npm install
npm run dev
```

The server listens on `0.0.0.0:5173` by default. For a production build:

```sh
npm run build
npm start
```

Set `PORT` to change the port and `DATA_DIR` to choose a persistent, private directory for enquiries. The form sends to the same-origin `/api/enquiries` endpoint; validated submissions are appended as JSON lines to `DATA_DIR/enquiries.jsonl` (default: `.data/enquiries.jsonl`, ignored by Git). A call request does **not** reserve a time. No email notification or calendar integration is configured; the operator must monitor or connect the submission store before launch. Use a persistent volume in hosted environments, restrict access to the data, and establish retention/deletion procedures. The legal pages are explicitly marked as drafts requiring review and company-specific details before publication.

The project studies are clearly marked illustrative concepts; no client names, metrics or client results were supplied. Original generated editorial images are included in `public/images`.

Run validation tests with `npm test`.
