import {
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-R5BP3EWW.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// app/routes/products.$handle.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function PrintJson({ data }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("details", { className: "outline outline-2 outline-blue-300 p-4 my-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("summary", { children: "Product JSON" }, void 0, false, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("pre", { children: JSON.stringify(data, null, 2) }, void 0, false, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 26,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/products.$handle.jsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}
function ProductHandle() {
  const { handle, product } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "product-wrapper", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: [
      "Product Handle: ",
      handle
    ] }, void 0, true, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PrintJson, { data: product }, void 0, false, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 37,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/products.$handle.jsx",
    lineNumber: 35,
    columnNumber: 5
  }, this);
}
export {
  ProductHandle as default
};
//# sourceMappingURL=/build/routes/products.$handle-7PY5B6PU.js.map
