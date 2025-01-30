const employees = [
  {
      "id": 1,
      "name": "John Doe",
      "email": "e@e.com",
      "password": "123",
      "tasks": [
          {
              "active": true,
              "newTask": false,
              "completed": true,
              "failed": false,
              "title": "Task 1",
              "description": "This is the description for Task 1.",
              "date": "2024-12-05",
              "category": "Development"
          },
          {
              "active": false,
              "newTask": true,
              "completed": false,
              "failed": true,
              "title": "Task 2",
              "description": "This is the description for Task 2.",
              "date": "2024-11-25",
              "category": "Testing"
          },
          {
              "active": true,
              "newTask": false,
              "completed": true,
              "failed": false,
              "title": "Task 3",
              "description": "This is the description for Task 3.",
              "date": "2024-12-01",
              "category": "Design"
          }
      ],
      "taskCounts": {
          "active": 2,
          "newTask": 1,
          "completed": 2,
          "failed": 1
      }
  },
  {
      "id": 2,
      "name": "Jane Smith",
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
          {
              "active": false,
              "newTask": true,
              "completed": false,
              "failed": true,
              "title": "Task 1",
              "description": "This is the description for Task 1.",
              "date": "2024-11-23",
              "category": "Management"
          },
          {
              "active": true,
              "newTask": false,
              "completed": true,
              "failed": false,
              "title": "Task 2",
              "description": "This is the description for Task 2.",
              "date": "2024-11-28T",
              "category": "Support"
          }
      ],
      "taskCounts": {
          "active": 1,
          "newTask": 1,
          "completed": 1,
          "failed": 1
      }
  },
  {
      "id": 3,
      "name": "Alice Johnson",
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
          {
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false,
              "title": "Task 1",
              "description": "This is the description for Task 1.",
              "date": "2024-11-27",
              "category": "Testing"
          },
          {
              "active": true,
              "newTask": false,
              "completed": true,
              "failed": false,
              "title": "Task 2",
              "description": "This is the description for Task 2.",
              "date": "2024-12-03T",
              "category": "Development"
          },
          {
              "active": false,
              "newTask": true,
              "completed": false,
              "failed": true,
              "title": "Task 3",
              "description": "This is the description for Task 3.",
              "date": "2024-11-30",
              "category": "Design"
          },
          {
              "active": true,
              "newTask": false,
              "completed": true,
              "failed": false,
              "title": "Task 4",
              "description": "This is the description for Task 4.",
              "date": "2024-12-02",
              "category": "Management"
          }
      ],
      "taskCounts": {
          "active": 3,
          "newTask": 2,
          "completed": 2,
          "failed": 1
      }
  },
  {
      "id": 4,
      "name": "Bob Brown",
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
          {
              "active": true,
              "newTask": false,
              "completed": true,
              "failed": false,
              "title": "Task 1",
              "description": "This is the description for Task 1.",
              "date": "2024-11-22",
              "category": "Support"
          },
          {
              "active": false,
              "newTask": true,
              "completed": false,
              "failed": true,
              "title": "Task 2",
              "description": "This is the description for Task 2.",
              "date": "2024-11-29T",
              "category": "Design"
          },
          {
              "active": true,
              "newTask": false,
              "completed": true,
              "failed": false,
              "title": "Task 3",
              "description": "This is the description for Task 3.",
              "date": "2024-12-01",
              "category": "Testing"
          }
      ],
      "taskCounts": {
          "active": 2,
          "newTask": 1,
          "completed": 2,
          "failed": 1
      }
  },
  {
      "id": 5,
      "name": "Eve Davis",
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
          {
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false,
              "title": "Task 1",
              "description": "This is the description for Task 1.",
              "date": "2024-12-04",
              "category": "Development"
          },
          {
              "active": false,
              "newTask": false,
              "completed": false,
              "failed": true,
              "title": "Task 2",
              "description": "This is the description for Task 2.",
              "date": "2024-11-21",
              "category": "Management"
          },
          {
              "active": true,
              "newTask": false,
              "completed": true,
              "failed": false,
              "title": "Task 3",
              "description": "This is the description for Task 3.",
              "date": "2024-11-28",
              "category": "Support"
          }
      ],
      "taskCounts": {
          "active": 2,
          "newTask": 1,
          "completed": 1,
          "failed": 1
      }
  }
];

      
  
  
  const admin=[{
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }];

  export const SetLocalStoage=()=>{
    // console.log("done")
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
  
  }

  export const GetLocalStoage=()=>{
    const employees=JSON.parse(localStorage.getItem('employees'))
    const admin=JSON.parse(localStorage.getItem('admin'))
    return {employees,admin}
  }

 

  
  

  