import { Router } from "express";

const router = Router();

router.post("/contact", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

router.get("/product", (req, res) => {
  console.log(req.query);
  res.send(`<h1> User search for Product ${req.query.search} mobile </h1>`);
});

router.get("/profile/:username", (req, res) => {
  console.log(req.params);
  res.send(`<h1>My user name is: ${req.params.username}</h1>`);
});

router.get("/profile/:username/article/:slug", (req, res) => {
  console.log(req.params);
  const formatedSlug = req.params.slug.replace(/-/g, " ");
  res.send(`<h1>Article ${req.params.username} by ${formatedSlug}</h1>`);
});

router.get("/report", (req, res) => {
  const student = [
    {
      name: "Pro",
      grade: "4th",
      sub: "CSE",
    },
    {
      name: "Pro1",
      grade: "5th",
      sub: "CSE",
    },
    {
      name: "Pro2",
      grade: "6th",
      sub: "CSE",
    },
    {
      name: "Pro3",
      grade: "7th",
      sub: "CSE",
    },
  ];
  return res.render("report", { student });
});

export const shortnerRoutes = router;
