Blog : 2 How Pick And Omit help in keeping code clean (DRY) ??

In TypeScript , we often work with large interfaces that contain many properties . Sometimes we do not need all properties in every situation . To save this problem , TypeScript provides utility types like " PICK and Omit" . These help us avoid rewriting code and follow the Dry principle, which means Do not Repeat Yourself .
The "Pick" utility type allows us to select only the properties we need from an existing interface. For example if we have a User interface with id , name , email , age , we can use Pick to create a new type that only includes id and name . This makes our code cleaner and more focused. 

On other hand, the "Omit " utility type does the opposite .It allows us to remove specific properties from an interface .For example , we can remove email form the User type if we do not need it > This also helps reduce duplication and keeps the code simple. 

In a simple word Pick and Omit make TypeScript code more reusable .
