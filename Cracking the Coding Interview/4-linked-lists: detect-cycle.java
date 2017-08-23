boolean hasCycle(Node head) {
    Set<Node> seen = new HashSet<>();
    while (head != null) {
        seen.add(head);
        head = head.next;
        if (seen.contains(head)) {
            return true;
        }
    }
    return false;
}