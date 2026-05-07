Blog: 1 Why "any" is unsafe and why "unknown" is better ?? 

ANS : In TypeScript type safety is very important because it helps us avoid errors in our code . When we use the "any" type , TypeScript stops checking the type completely. This means we can do anything with the value . even if it is not correct . For example , if we assign a number and try to use a string method , it will case a runtime error . 

On the other hand, "unknown" is a safer option. It allows "any"type of value but it does not let us use it directly without checking the type first . We must use type checking like "typeof" before using the value. This makes our code safer and reduces bugs.

So in simple words , "any" type is unsafe but "unknown" is safer because it forces us to check the type before using it. 