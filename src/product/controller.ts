import { Router } from "express";
import { create, paginate, remove } from "./service";

const productRouter = Router();

productRouter.get("/", (req, res) => {
  const items = req.query.items;
  const currentPage = req.query.currentPage;

  if (!items || !currentPage) {
    res.status(400).json({
      message: "items and currentPage is required",
    });
  }
  const paginateResult = paginate(Number(items), Number(currentPage));
  res.json(paginateResult);
});

productRouter.delete("/:id", (req, res) => {
  const id = req.params.id;
  const hasRemoved = remove(id);

  if (hasRemoved) {
    res.json({
      message: "removed success",
    });
  } else {
    res.status(404).json({
      message: "cannot find product",
    });
  }
});

productRouter.post("/", (req, res) => {
  const hasCreate = create(req.body);
  if (hasCreate) {
    res.json({
      message: "success product created",
    });
  } else {
    res.status(400).json({
      message: "unexcpected error at create product",
    });
  }
});

export default productRouter;
