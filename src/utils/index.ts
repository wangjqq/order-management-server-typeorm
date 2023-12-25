export function convertToTreeData(flatData: any[]): any[] {
  const idToNodeMap: any = {}

  // 构建 ID 到节点的映射
  flatData.forEach((node) => {
    idToNodeMap[node.id] = { ...node, children: [] }
  })

  // 遍历所有节点，将子节点添加到父节点的 children 数组中
  Object.values(idToNodeMap).forEach((node: any) => {
    const parentId = node.parentId

    if (parentId && idToNodeMap[parentId]) {
      idToNodeMap[parentId].children?.push(node)
    }
  })

  // 找到根节点
  const roots: any[] = Object.values(idToNodeMap).filter((node: any) => !node.parentId)

  return roots
}
