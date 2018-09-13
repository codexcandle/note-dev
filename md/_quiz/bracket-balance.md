## Q
Is the following string `{[}]` balanced?

## A
```c#
    private bool CheckIfBalancedBrackets(string bracketStr)
    {
        Stack stack = new Stack();

        foreach(char c in bracketStr)
        {
            // if => char is openChar
            if(c == '{' ||
                c == '[' ||
                c == '(')
            {
                stack.Push(c);
            }
            else if(c == '}' ||
                c == ']' ||
                c == ')')
            {
                // check if c == counterpart to top item on stack
                string stackChar = stack.Peek().ToString();

                // attempt to get counter-char
                string counterChar = GetCharCounterpart(stackChar);
                if (counterChar == null) return false;

                // check if match!
                if (c == (counterChar[0]))
                {
                    // remove item from stack
                    stack.Pop();

                    // proceed with loop!
                }
            }
        }

        // if stack is not empty, then not balanced!
        return (stack.Count == 0);
    }

    private string GetCharCounterpart(string str)
    {
        // sanitize!
        // TODO - swap this for char?
        if (str.Length != 1) return null;

        switch (str[0])
        {
            case '{':
                return "}";
            case '[':
                return "]";
            case '(':
                return ")";
            default:
                break;
        }

        return null;
    }
```

###### FURTHER
[hacker-rank](https://www.youtube.com/watch?v=IhJGJG-9Dx8)