/*
    description field is the slice of the whole detailed description
*/
export const questionData = [
    {
        "id": 1,
        "title": "Cmake if condition (directory existence) in add_custom_target fails in some builds?",
        "description": `In this C++ code, sorting the data (before the timed region) makes the primary loop ~6x faster:

#include <algorithm>
#include <ctime>
#include <iostream>

int main()
{
    // Generate data
    const unsigned arraySize = 32768;
    int data[arraySize];

    for (unsigned c = 0; c < arraySize; ++c)
        data[c] = std::rand() % 256;

    // !!! With this, the next loop runs faster.
    std::sort(data, data + arraySize);

    // Test
    clock_t start = clock();
    long long sum = 0;
    for (unsigned i = 0; i < 100000; ++i)
    {
        for (unsigned c = 0; c < arraySize; ++c)
        {   // Primary loop.
            if (data[c] >= 128)
                sum += data[c];
        }
    }

    double elapsedTime = static_cast<double>(clock()-start) / CLOCKS_PER_SEC;

    std::cout << elapsedTime << '\n';
    std::cout << "sum = " << sum << '\n';
}
Without std::sort(data, data + arraySize);, the code runs in 11.54 seconds.
With the sorted data, the code runs in 1.93 seconds.
(Sorting itself takes more time than this one pass over the array, so it's not actually worth doing if we needed to calculate this for an unknown array.)

Initially, I thought this might be just a language or compiler anomaly, so I tried Java:

import java.util.Arrays;
import java.util.Random;

public class Main
{
    public static void main(String[] args)
    {
        // Generate data
        int arraySize = 32768;
        int data[] = new int[arraySize];

        Random rnd = new Random(0);
        for (int c = 0; c < arraySize; ++c)
            data[c] = rnd.nextInt() % 256;

        // !!! With this, the next loop runs faster
        Arrays.sort(data);

        // Test
        long start = System.nanoTime();
        long sum = 0;
        for (int i = 0; i < 100000; ++i)
        {
            for (int c = 0; c < arraySize; ++c)
            {   // Primary loop.
                if (data[c] >= 128)
                    sum += data[c];
            }
        }

        System.out.println((System.nanoTime() - start) / 1000000000.0);
        System.out.println("sum = " + sum);
    }
}
With a similar but less extreme result.

My first thought was that sorting brings the data into the cache, but that's silly because the array was just generated.

What is going on?
Why is processing a sorted array faster than processing an unsorted array?
The code is summing up some independent terms, so the order should not matter.`,
        "tags": ["python", "django", "linux", "cmake"],
        "username": "User1",
        "posted_at": "5 mins ago"
    },
    {
        "id": 2,
        "title": "SwiftUI: Align vertical center of View with first line of multiline Text within an HStack",
        "description": "I am attempting to achieve a layout within an HStack that contains two views: A Text view that may or may not contain multiple lines of text, and a Button. These are aligned with the top edge of th; I am attempting to achieve a layout within an HStack that contains two views: A Text view that may or may not contain multiple lines of text, and a Button. These are aligned with the top edge of th",
        "tags": ["swiftui", "text", "layout", "view", "hstack"],
        "username": "User2",
        "posted_at": "10 hours ago"
    },
    {
        "id": 3,
        "title": "SwiftUI NavigationStack - check which views are opened and close specific one",
        "description": ".navigationDestination(for: String.self){ selection in if(selection == 'login'){ Login(path: $path) }else if(selection == 'register'){ CreateAccount(path: $; .navigationDestination(for: String.self){ selection in if(selection == 'login'){ Login(path: $path) }else if(selection == 'register'){ CreateAccount(path: $",
        "tags": ["ios", "swiftui", "swiftui-navigationstack"],
        "username": "User3",
        "posted_at": "1 day ago"
    },
    {
        "id": 4,
        "title": "Flutter app failed to launch on iOS after adding Firebase",
        "description": ".navigationDestination(for: String.self){ selection in if(selection == 'login'){ Login(path: $path) }else if(selection == 'register'){ CreateAccount(path: $; .navigationDestination(for: String.self){ selection in if(selection == 'login'){ Login(path: $path) }else if(selection == 'register'){ CreateAccount(path: $",
        "tags": ["ios", "swiftui", "swiftui-navigationstack"],
        "username": "User3",
        "posted_at": "2 days ago"
    },
    {
        "id": 5,
        "title": "Problem with cascade persist in Hibernate with 3 entities",
        "description": ".navigationDestination(for: String.self){ selection in if(selection == 'login'){ Login(path: $path) }else if(selection == 'register'){ CreateAccount(path: $; .navigationDestination(for: String.self){ selection in if(selection == 'login'){ Login(path: $path) }else if(selection == 'register'){ CreateAccount(path: $",
        "tags": ["ios", "swiftui", "swiftui-navigationstack"],
        "username": "User3",
        "posted_at": "4 days ago"
    },
]