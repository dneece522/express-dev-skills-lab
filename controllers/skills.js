import { Skill } from '../models/skill.js'

function index(req, res) {
  Skill.find({})
  .then(skills => {
    res.render('skills/index', {
      skills: skills,
      time: req.time,
      date: req.date
    })
  })
  .catch(error => {
    console.error(error)
    res.redirect('/')
  })
}

function newSkill(req, res) {
  res.render('skills/new')
}

function create(req, res) {
  req.body.language = false
  Skill.create(req.body)
  // Skill.create and .then() should never be seperated (unless it's by a comment)
  .then(skill => {
    res.redirect('/skills')
  })
  .catch(error => {
    console.error(error)
    res.redirect('/skills')
  })
}

function show(req, res) {
  Skill.findById(req.params.id)
  .then(skill => {
    res.render('skills/show', {
      skill: skill
    })
  })
  .catch(error => {
    console.error(error)
    res.redirect('/skills')
  })
}

function deleteSkill(req, res) {
  Skill.findByIdAndDelete(req.params.id)
  .then(skill => {
    res.redirect('/skills')
  })
  .catch(error => {
    console.error(error)
    res.redirect('/skills')
  })
}

export {
  index,
  newSkill as new,
  create,
  show,
  deleteSkill as delete
}