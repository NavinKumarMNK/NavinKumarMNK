#include <bits/stdc++.h>
using namespace std;

void splitlist(vector<int> &p, int n)
{
    vector<int> q2(n - int(n / 2));
    for (int i = n / 2; i < n; i++)
    {
        q2[i - n / 2] = p[i];
    }

    int size = int((n - int(n / 2)) / 2);
    for (int i = 0; i <= size; i++)
    {

        int temp = q2[i];
        q2.erase(q2.begin() + i);
        q2.push_back(temp);
    }
    for (int i = 0; i < (n - int(n / 2)); i++)
    {
        cout << q2[i] << "\n";
    }
}

int main()
{
    int n;
    cin >> n;

    vector<int> p(n);
    for (int i = 0; i < n; i++)
    {
        cin >> p[i];
    }
    splitlist(p, n);
    return 0;
}

/*
#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

struct node
{
    int data;
    struct node *next;
};

struct node *addEnd(struct node *last, int data)
{
    struct node *newptr = (struct node *)malloc(sizeof(struct node));
    newptr->data = data;
    if (last == NULL)
    {
        last = newptr;
        last->next = last;
    }
    else
    {
        newptr->next = last->next;
        last->next = newptr;
        last = newptr;
    }

    return last;
}

void print(struct node *last)
{
    struct node *ptr;
    ptr = last->next;

    do
    {
        printf("%d\n", ptr->data);
        ptr = ptr->next;
    } while ((ptr != last->next));
}

int main()
{
    int n;
    scanf("%d", &n);

    struct node *last = NULL;

    for (int i = 0; i < n; i++)
    {
        int data;
        scanf("%d", &data);
        last = addEnd(last, data);
    }

    struct node *list1 = NULL;
    struct node *list2 = NULL;

    struct node *tempptr = last->next;

    for (int i = 0; i < n; i++)
    {
        if (i < n / 2)
            list1 = addEnd(list1, tempptr->data);
        else
            list2 = addEnd(list2, tempptr->data);
        tempptr = tempptr->next;
    }

    struct node *grouped_list2 = NULL;

    tempptr = list2->next;
    for (int i = 0; i < n - n / 2; i++)
    {
        if (i % 2 != 0)
            grouped_list2 = addEnd(grouped_list2, tempptr->data);
        tempptr = tempptr->next;
    }

    tempptr = list2->next;
    for (int i = 0; i < n - n / 2; i++)
    {
        if (i % 2 == 0)
            grouped_list2 = addEnd(grouped_list2, tempptr->data);
        tempptr = tempptr->next;
    }
    printf(grouped_list2);
    return 0;
}
*/