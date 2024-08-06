
# Task Management System API: :chart_with_upwards_trend:

## Objective

Develop a RESTful API for a simple task management system that allows users to manage projects and tasks. User authentication is implemented using AWS Cognito.

## Design Stracture
[Uploading U<mxfile host="app.diagrams.net" agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36" version="24.7.6">
  <diagram name="Page-1" id="36CCL_XP0LhvG3aX4PIT">
    <mxGraphModel dx="718" dy="434" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0">
      <root>
        <mxCell id="0" />
        <mxCell id="1" parent="0" />
        <mxCell id="V7EhEk08dL_LarlGD7xh-2" value="&lt;div&gt;&lt;br&gt;&lt;/div&gt;&lt;div&gt;&lt;br&gt;&lt;/div&gt;MongoDB" style="shape=cylinder3;whiteSpace=wrap;html=1;boundedLbl=1;backgroundOutline=1;size=15;" vertex="1" parent="1">
          <mxGeometry x="670" y="60" width="60" height="100" as="geometry" />
        </mxCell>
        <mxCell id="V7EhEk08dL_LarlGD7xh-6" value="" style="shape=flexArrow;endArrow=classic;startArrow=classic;html=1;rounded=0;" edge="1" parent="1">
          <mxGeometry width="100" height="100" relative="1" as="geometry">
            <mxPoint x="550" y="100" as="sourcePoint" />
            <mxPoint x="670" y="99.5" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="V7EhEk08dL_LarlGD7xh-7" value="&lt;div&gt;&lt;br&gt;&lt;/div&gt;&lt;div&gt;&lt;br&gt;&lt;/div&gt;&lt;div&gt;&lt;br&gt;&lt;/div&gt;Express.js API" style="rounded=1;whiteSpace=wrap;html=1;" vertex="1" parent="1">
          <mxGeometry x="430" y="70" width="120" height="60" as="geometry" />
        </mxCell>
        <mxCell id="V7EhEk08dL_LarlGD7xh-8" value="" style="shape=flexArrow;endArrow=classic;startArrow=classic;html=1;rounded=0;exitX=0;exitY=0.5;exitDx=0;exitDy=0;" edge="1" parent="1" source="V7EhEk08dL_LarlGD7xh-7">
          <mxGeometry width="100" height="100" relative="1" as="geometry">
            <mxPoint x="400" y="101" as="sourcePoint" />
            <mxPoint x="340" y="100" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="V7EhEk08dL_LarlGD7xh-9" value="&lt;div&gt;&lt;br&gt;&lt;/div&gt;&lt;div&gt;&lt;br&gt;&lt;/div&gt;&lt;div&gt;&lt;br&gt;&lt;/div&gt;Next.js App" style="whiteSpace=wrap;html=1;aspect=fixed;" vertex="1" parent="1">
          <mxGeometry x="260" y="60" width="80" height="80" as="geometry" />
        </mxCell>
        <mxCell id="V7EhEk08dL_LarlGD7xh-10" value="" style="endArrow=classic;html=1;rounded=0;" edge="1" parent="1">
          <mxGeometry width="50" height="50" relative="1" as="geometry">
            <mxPoint x="520" y="130" as="sourcePoint" />
            <mxPoint x="580" y="190" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="V7EhEk08dL_LarlGD7xh-11" value="" style="endArrow=classic;html=1;rounded=0;" edge="1" parent="1">
          <mxGeometry width="50" height="50" relative="1" as="geometry">
            <mxPoint x="460" y="130" as="sourcePoint" />
            <mxPoint x="420" y="200" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="V7EhEk08dL_LarlGD7xh-13" value="&lt;div&gt;&lt;br&gt;&lt;/div&gt;&lt;div&gt;&lt;br&gt;&lt;/div&gt;Docker&amp;nbsp;" style="ellipse;whiteSpace=wrap;html=1;" vertex="1" parent="1">
          <mxGeometry x="540" y="190" width="100" height="70" as="geometry" />
        </mxCell>
        <mxCell id="V7EhEk08dL_LarlGD7xh-14" value="&lt;div&gt;&lt;br&gt;&lt;/div&gt;&lt;div&gt;&lt;br&gt;&lt;/div&gt;aws cognito" style="ellipse;shape=cloud;whiteSpace=wrap;html=1;align=center;" vertex="1" parent="1">
          <mxGeometry x="310" y="190" width="140" height="110" as="geometry" />
        </mxCell>
        <mxCell id="V7EhEk08dL_LarlGD7xh-15" value="" style="shape=image;verticalLabelPosition=bottom;labelBackgroundColor=default;verticalAlign=top;aspect=fixed;imageAspect=0;image=data:image/jpeg,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;" vertex="1" parent="1">
          <mxGeometry x="360" y="210" width="40" height="40" as="geometry" />
        </mxCell>
        <mxCell id="V7EhEk08dL_LarlGD7xh-16" value="" style="shape=image;verticalLabelPosition=bottom;labelBackgroundColor=default;verticalAlign=top;aspect=fixed;imageAspect=0;image=data:image/png,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;" vertex="1" parent="1">
          <mxGeometry x="685" y="95" width="30" height="30" as="geometry" />
        </mxCell>
        <mxCell id="V7EhEk08dL_LarlGD7xh-17" value="" style="shape=image;verticalLabelPosition=bottom;labelBackgroundColor=default;verticalAlign=top;aspect=fixed;imageAspect=0;image=data:image/png,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;" vertex="1" parent="1">
          <mxGeometry x="569.5200000000001" y="200" width="40.97" height="29" as="geometry" />
        </mxCell>
        <mxCell id="V7EhEk08dL_LarlGD7xh-18" value="" style="shape=image;verticalLabelPosition=bottom;labelBackgroundColor=default;verticalAlign=top;aspect=fixed;imageAspect=0;image=data:image/png,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;" vertex="1" parent="1">
          <mxGeometry x="277.5" y="70" width="45" height="45" as="geometry" />
        </mxCell>
        <mxCell id="V7EhEk08dL_LarlGD7xh-19" value="" style="shape=image;verticalLabelPosition=bottom;labelBackgroundColor=default;verticalAlign=top;aspect=fixed;imageAspect=0;image=data:image/png,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;" vertex="1" parent="1">
          <mxGeometry x="461.74" y="75" width="56.52" height="40" as="geometry" />
        </mxCell>
      </root>
    </mxGraphModel>
  </diagram>
</mxfile>
ntitled Diagram.drawio…]()


## Project Stracture
   ```bash
task-management-system/
├── api/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── middlewares/
│   │   ├── utils/
│   │   ├── config/
│   │   ├── Enums/
│   │   ├── logs/
│   │   ├── types/
│   │   │   └── express/
│   │   ├── MongoDB/
│   │   ├── app.ts
│   │   └── index.ts
│   ├── test/
│   ├── .env.example
│   ├── Dockerfile
│   ├── package.json
│   └── tsconfig.json
├── README.md
└── .gitignore
   ```


## Assignment Requirements

### Frameworks & Databases

1. **Initialize Project:**
   - Set up a Node.js project using TypeScript.
   - Use Express.js as the framework.

2. **Database Interaction:**
   - Utilize Mongoose as the ORM for MongoDB.

### Core Features

#### User Authentication

- Implement user authentication using AWS Cognito User Pool.
- Synchronize data between MongoDB and AWS Cognito.
- Include user confirmation functionality.

#### Project Management

- **CRUD Operations:** Implement Create, Read, Update, and Delete functionalities for projects.
- **Attributes:** Each project should have a name and description.

#### Task Management

- **CRUD Operations:** Implement Create, Read, Update, and Delete functionalities for tasks within a project.
- **Attributes:** Each task should have a title, description, and status (e.g., todo, in-progress, done).

### Additional Features

- **Logging & Error Handling:** Implement basic logging and error handling mechanisms.
- **Pagination:** Implement pagination for GET requests.
- **Role-Based Access Control:** Implement roles like admin and user to manage permissions.

### Testing

- **Unit Testing:** Implement unit tests for core functionalities using Jest.

## Deployment Suggestion

### Recommended Deployment Approach

#### Containerization

- **Use Docker to containerize the application.** 
- **Reason:** For handling 10,000 users a day, use Docker for containerization. Docker makes it easy to scale your application by running multiple instances when traffic increases. It also ensures consistency and efficient resource usage, making it ideal for large-scale deployments.




## Getting Started

### How to Run It

1. **Clone the Repository:**
   ```bash
   git clone git@github.com:KobiSaada/TaskManagementSystem_MOVEO.git
   cd task-management-system
   ```

3. **Install Dependencies:**
   ```bash
   npm install
   ```

4. **Set Up Environment Variables:**
   - Create a `.env` file and add the necessary environment variables.

5. **Run the Application:**
   ```bash
   npm start
   ```

6. **Run Tests:**
   ```bash
   npm test
   ```

---

For further questions or assistance, feel free to reach out. Happy coding! :smiley:

