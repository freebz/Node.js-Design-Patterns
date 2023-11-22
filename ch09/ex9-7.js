// 9-4-8 실전에서

for await (const record of debugger.queryStream(sql`SELECT * FROM my_table`))
{
  // 레코드를 가지고 필요한 작업을 수행
}