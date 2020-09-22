declare namespace StoreState {
  //接口返回结构
  export interface Result {
    code: number,
    data: any,
    status: boolean,
    msg: string
  }

  //请求参数结构
  export interface FetchParams {
    url: string,
    data: object | string,
    [propName: string]: any
  }

  //权限返回实体
  export interface Role {
    icon: string,
    list: Role[],
    menuId: number,
    name: string,
    perms: string,
    requestPath: string,
    url: string,
    [propName: string]: any
  }

  //layout布局
  export interface Layout {
    labelCol: {
      span: number
    },
    wrapperCol: {
      span: number
    }
  }

  //分页参数
  export interface Pagination {
    current?: number,
    position?: string,
    pageSize?: number,
    showQuickJumper?: boolean,
    showSizeChanger?: boolean,
    total?: number,
    showTotal?: (total: number, range: [number, number]) => any
  }
}