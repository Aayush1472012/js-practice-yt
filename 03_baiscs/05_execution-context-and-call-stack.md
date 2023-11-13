Context are of type:  
1. Global Execution Context,  
2. Function Execution Context, and  
3. Eval Execution Context (part of global context).

![image](https://github.com/Aayush1472012/js-practice-yt/assets/62372257/b10262c7-c911-4553-a97a-8fe8e7973822)



How JS code is executed ???
1. JS creates Global excution context.  
2. Next it creates 'memory phase'.  
3. Memory phase - In this phase, the variables are set to undefined until the execution phase(next phase) and the functions are set to their definitions.  
4. Next it creates the 'execution phase'.  
5. Execution phase - In this phase, the variables are initialsed to given values and when the functions are called, it creates a memory phase and execution phase for the function just like the main one.

![image](https://github.com/Aayush1472012/js-practice-yt/assets/62372257/239e9c6b-b495-423e-8acf-eb6ebaab3a92)


For live demo:  
browser > inspect > Sources.  
Create a snippet with few functions and visually experience the call stack.  
