import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const requiredDocuments = [
  "README.md",
  "AGENTS.md",
  ".gitignore",
  ".env.example",
  "docs/PRODUCT_SCOPE.md",
  "docs/DESIGN_PRINCIPLES.md",
  "docs/ARCHITECTURE.md",
  "docs/DATA_MODEL.md",
  "docs/USER_FLOWS.md",
  "docs/ANALYTICS_EVENTS.md",
  "docs/SECURITY.md",
  "docs/IMPLEMENTATION_PLAN.md",
  "docs/DECISIONS.md",
  "docs/CHANGELOG.md",
];

test("required foundation documents exist", async () => {
  await Promise.all(
    requiredDocuments.map(async (path) => {
      const contents = await readFile(path, "utf8");
      assert.ok(contents.trim().length > 0, `${path} should not be empty`);
    }),
  );
});

test("project scripts cover the required checks", async () => {
  const packageJson = JSON.parse(await readFile("package.json", "utf8"));

  for (const script of ["dev", "build", "lint", "typecheck", "test"]) {
    assert.equal(typeof packageJson.scripts[script], "string", `missing npm script: ${script}`);
  }
});

test("application uses the src-based App Router", async () => {
  const page = await readFile("src/app/page.tsx", "utf8");
  const layout = await readFile("src/app/layout.tsx", "utf8");

  assert.match(page, /export default function HomePage/);
  assert.match(layout, /export default function RootLayout/);

  await assert.rejects(access("app"), (error) => {
    return error instanceof Error && "code" in error && error.code === "ENOENT";
  });
});
