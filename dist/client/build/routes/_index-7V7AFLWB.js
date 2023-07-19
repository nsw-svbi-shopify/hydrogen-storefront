import {
  Image
} from "/build/_shared/chunk-YE2TYU3M.js";
import {
  Link,
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-R5BP3EWW.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// app/routes/_index.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function meta() {
  return [
    { title: "Hydrogen" },
    { description: "A custom storefront powered by Hydrogen" }
  ];
}
function Index() {
  const { collections } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "w-full gap-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "whitespace-pre-wrap max-w-prose font-bold text-lead", children: "Collections" }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid-flow-row grid gap-2 gap-y-6 md:gap-4 lg:gap-6 grid-cols-1 sm:grid-cols-3", children: collections.nodes.map((collection) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/collections/${collection.handle}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-4", children: [
        collection?.image && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Image,
          {
            alt: `Image of ${collection.title}`,
            data: collection.image,
            sizes: "(max-width: 32em) 100vw, 33vw",
            widths: [400, 500, 600, 700, 800, 900],
            loaderOptions: {
              scale: 2,
              crop: "center"
            }
          },
          collection.id,
          false,
          {
            fileName: "app/routes/_index.jsx",
            lineNumber: 28,
            columnNumber: 19
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "whitespace-pre-wrap max-w-prose font-medium text-copy", children: collection.title }, void 0, false, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 40,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 26,
        columnNumber: 15
      }, this) }, collection.id, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 25,
        columnNumber: 13
      }, this);
    }) }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 22,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/_index-7V7AFLWB.js.map
