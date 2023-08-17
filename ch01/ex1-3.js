// 1-2-4 이벤트 디멀티플렉싱

watchedList.add(socketA, FOR_READ)
watchedList.add(fileB, FOR_READ)
while (events = demultiplexer.watch(watchedList)) {
    // 이벤트 루프
    for (event of events) {
        // 블로킹하지 않으며 항상 데이터를 반환
        data = event.resource.read()
        if (data === RESOURCE_CLOSED) {
            // 리소스가 닫히고 관찰되는 리스트에서 삭제
            demultiplexer.unwatch(event.resource)
        } else {
            // 실제 데이터를 받으면 처리
            consumeData(data)
        }
    }
}