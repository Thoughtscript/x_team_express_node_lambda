'use strict'

/**
 * Public API.
 */

const express = require('express'),
  publicapi = express.Router(),
  data = require('../../data.json')

publicapi
  .get("/", async (req, res) => {
    let reponseData = await data
    return res.send({status: 200, data: reponseData});
  })

  .get("/one", async (req, res) => {
    let reponseData = await data[req.param.id]
    return res.send({status: 200, data: reponseData});
  })

  .delete("/", async (req, res) => {
    delete data[req.param.id]
    let reponseData = await data
    return res.send({status: 200, data: reponseData});
  })

  .put("/", async (req, res) => {
    data[req.param.contact.id] = req.param.contact
    let reponseData = await data
    return res.send({status: 200, data: reponseData});
  })

  .post("/", async (req, res) => {
    data[req.param.contact.id] = req.param.contact
    let reponseData = await data
    return res.send({status: 200, data: reponseData});
  })

console.log(`Public API initialized`);

module.exports = publicapi;