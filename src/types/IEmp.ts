// 인터페이스 : == 자바의 모델클래스와 유사
// 인터페이스 속성에 자료형을 미리 지정하는 것
export default interface IEmp{
    eno?: any | null,
    ename: string,
    job: string,
    manager: number | string
    hiredate: string,
    salary: number | string,
    commission: any | null,
    dno: number | string
}