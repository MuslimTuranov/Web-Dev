def sum13(nums):
    total = 0
    i = 0
    while i < len(nums):
        if nums[i] == 13:
            i = i + 1
        else: 
            total += nums[i]
        i +=1

    return total


nums = [1, 2, 13, 2, 1, 13]

print(sum13(nums))