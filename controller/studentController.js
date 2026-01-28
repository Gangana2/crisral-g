import Student from "../models/student.js";

export function saveStudent(req, res){

  const newStudent = new Student(req.body);

  newStudent.save()
    .then(() => {
      res.status(201).json({ message: 'Student created successfully' });
    })
    .catch((error) => {
      res.status(500).json({ error: 'Failed to create student' });
    });
    

}

export function getStudent(req, res) {
  Student.find()
    .then((students) => {
      res.status(200).json(students);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Failed to fetch students' });
    });
  
}

export function updateStudent(req, res) {
    res.status(200).json({ message: 'Student updated successfully' });
}

export function deleteStudent(req, res) {
    res.status(200).json({ message: 'Student deleted successfully' });
}

export function studentSearch(req, res) {
  const name = req.body.name;
  Student.find({ name : name })
    .then((students) => {
      res.status(200).json(students);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Failed to search students' });
    });
}
