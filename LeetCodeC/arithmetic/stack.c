#include <stdio.h>
#include <malloc.h>
#define maxsize 10
#define err 0;
#define yes 1;

typedef int ElementType;
typedef char charType;

typedef struct StackNode {
	ElementType data[maxsize];
	int count;
	int n;
}stack;

stack* initStack();
int push(stack* s, int item);
void printfstack(stack* s);
ElementType pop (stack* s);



int main (){
	printf("栈\n");	
	stack* init = initStack();
	push(init,1);
	ElementType e =  pop (init);
	printf("count :%d\n",init->count);
	printf("pop: %d\n",e); 
	printfstack(init);
	
}


// 初始化栈
stack* initStack(){
	stack* newStack = (stack*)malloc(sizeof(stack));
	int i;
	newStack->count = 0;
	newStack->n = maxsize;
	for(i = 0;i<newStack->n;i++){
		newStack->data[i] = -1;
	//	printf("ces\n");
	}
	//printfstack(newStack);
	// newStack->count = 0;
	// newStack->n = maxsize;
	return newStack;
}

// 入栈
int push(stack* s, int item){
	
	if(s->count = s->n && s->count > s->n) {
		return err;
	}
	
	s->data[s->count] = item;
	s->count++;
	return yes;

}

// 弹栈
ElementType pop (stack* s){
	s->count--;	
	ElementType p = s->data[s->count];
	s->data[s->count] = -1;
	return p;

}

// 遍历栈
void printfstack(stack* s){
	int i = 0;
	for(i = 0; i < s->n; i ++){
		printf("%d, ",s->data[i]);
	}
	printf("\n");
}

// 括号匹配中的应用
int isbracket(char* c){
	
}
