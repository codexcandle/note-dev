## Q
Write an algorithm to shuffle a deck of cards.

## A

```c#
public static void ShuffleArray(int[] a)
{
	int length = a.Length;
	for(int i = 0; i < length; i++)
	{
		int temp = a[i];
		int rand = Random.Range(0, length);

		a[i] = a[rand];
		a[rand] = temp;
	}
}
```

###### FURTHER
[shuffle](./../../cs/algorithm/#shuffle)