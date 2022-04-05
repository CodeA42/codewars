using System;

namespace scaling_squared_strings.cs
{
    class Program
    {
        static void Main(string[] args)
        {
            string a ="abcd\nefgh\nijkl\nmnop";
            string final = Scaling.Scale(a, 2, 3);
            Console.WriteLine(final);
            Console.ReadLine();
        }
    }
}
public class Scaling
{
    public static string Scale(string phrases, int letterRep, int phraseRep) 
    {
        string buffer = "";
        string final = "";
        for (var i = 0; i < phrases.Length; i++)
        {
            if(phrases[i].ToString() == "\n")
            {
                buffer += "\n";
                final += RepeatString(buffer, phraseRep);
                buffer = "";
                continue;
            }
            buffer += RepeatString(phrases[i].ToString(), letterRep);
        }
        return final + RepeatString(buffer + "\n", phraseRep);
    }

    public static string RepeatString(string input, int n){
        string final = "";
        for (var i = 0; i < n; i++)
        {
            final += input;
        }
        return final;
    }
}