const express = require('express')
const router = express.Router()
const Color = require('../models/color')

// Creating one
router.post('/', async (req, res) => {
  const color = new Color({
    name: req.body.name,
    password: req.body.password
  })

  try {
    const newColor = await color.save()
    res.status(201).json(newColor)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Getting all 
router.get('/', async (req, res) => {
  try {
    const color = await Color.find()
    res.json(color)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Getting one
router.get('/:id', getColor, (req, res) => {
  res.json(res.color)
})

// Updating one
router.patch('/:id', getColor, async (req, res) => {
  if (req.body.money != null) {
    res.color.money = req.body.money
  }
  if (req.body.easyRgb != null) {
    res.color.easyRgb = req.body.easyRgb
  }
  if (req.body.hardRgb != null) {
    res.color.hardRgb = req.body.hardRgb
  }
  if (req.body.easyHex != null) {
    res.color.easyHex = req.body.easyHex
  }
  if (req.body.hardHex != null) {
    res.color.hardHex = req.body.hardHex
  }
  if (req.body.market1 != null) {
    res.color.market1 = req.body.market1
  }
  if (req.body.market2 != null) {
    res.color.market2 = req.body.market2
  }
  if (req.body.market3 != null) {
    res.color.market3 = req.body.market3
  }
  if (req.body.theme != null) {
    res.color.theme = req.body.theme
  }

  try {
    const updatedColor = await res.color.save()
    res.json(updatedColor)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Deleting one
router.delete('/:id', getColor, async (req, res) => {
  try {
    await res.color.remove()
    res.json({ message: 'Deleted' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

async function getColor(req, res, next) {
  let color
  try {
    color = await Color.findById(req.params.id)
    if (color == null) {
      return res.status(404).json({ message: 'Not found' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.color = color
  next()
}

module.exports = router