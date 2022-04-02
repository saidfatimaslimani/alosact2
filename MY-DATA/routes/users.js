const express = require('express')
const router = express.Router()
const Subscriber = require('/users')

// Getting all
router.get('/', async (req, res) => {
  try {
    const users = await user.find()
    res.json(users)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Getting One
router.get('/:id', getUsers, (req, res) => {
  res.json(res.users)
})

// Creating one
router.post('/', async (req, res) => {
  const user = newUser({
    name: req.body.name,
    userslivres: req.body.userslivres
  })
  try {
    const newUser = await user.save()
    res.status(201).json(newUser)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Updating One
router.patch('/:id', getUsers, async (req, res) => {
  if (req.body.name != null) {
    res.user.name = req.body.name
  }
  if (req.body.userslivres != null) {
    res.user.userslivres = req.body.userslivres
  }
  try {
    const updatedUser = await res.user.save()
    res.json(updatedUser)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Deleting One
router.delete('/:id', getUsers, async (req, res) => {
  try {
    await res.user.remove()
    res.json({ message: 'Deleted users' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

async function getUsers(req, res, next) {
  let users
  try {
    user= await user.findById(req.params.id)
    if (user == null) {
      return res.status(404).json({ message: 'Cannot find users' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.user = user
  next()
}

module.exports = router