// CRUD Routes.
import express, { application } from "express";
import { Router } from "express";

// In-memory "database"
let devices = [];
let idCounter = 1;

//CREATE
router.post("/", (req, resp) => {
  //Deconstruct values from request
  const { name, status, location } = req.body;

  //validation::
  if (!name || !status || !location)
    resp.status(400).json({ error: "All fields are required to proceed" });

  const device = {
    id: idCounter++,
    status: status,
    location: location,
  };

  devices.push(device);

  resp.status(201).json(device);
});
//READ
// Get all devices::
application.get("/:id", (req, resp) => {
  const device = devices.find((d) => d.id == req.params.id);
  if (!device)
    resp.status(404).json({
      error: "No device found",
    });

  //item found, return it
  resp.json(device);
});
//UPDATE

application.put("/:id", (req, resp) => {
  const device = devices.find((d) => d.id == req.params.id);
  if (!device)
    resp.status(404).json({
      error: "No device found",
    });

  //deconstruct values from passed values
  const { status, location, name } = req.body;

  // if (!name || !status || !location)
  //   resp.status(404).json({
  //     error: "All values are requred to update",
  //   });

  //update new values
  if (name) device.name = name;
  if (status) device.status = status;
  if (location) device.location = location;

  resp.json(device);
});
//DELETE

router.delete("/:id", (req, res) => {
  //Validate to make sure the value is found and can be deleted
  devices = devices.filter((d) => d.id !== parseInt(req.params.id));
  if (device) res.status(204).send();
});

export default router;
