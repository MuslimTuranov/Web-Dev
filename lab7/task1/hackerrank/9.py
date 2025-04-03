if __name__ == '__main__':
    n = int(input())
    arr = map(int, input().split())

    newArr = list(arr)
    
    uniqArr = sorted(set(newArr), reverse=True)
    
    print(uniqArr[1])
    