<template>
  <el-card>
    <h1>文章列表</h1>
    <div class="btn-group">
      <el-button
        type="primary"
        icon="el-icon-edit"
        @click="jump('/article/new')"
        >新增</el-button
      >
    </div>
    <el-table :data="articleList" border style="width: 100%">
      <el-table-column fixed prop="id" label="ID"> </el-table-column>
      <el-table-column prop="title" label="标题"> </el-table-column>
      <el-table-column prop="author" label="作者"> </el-table-column>
      <el-table-column prop="category" label="分类"> </el-table-column>
      <el-table-column label="标签">
        <template slot-scope="scope">
          <el-tag
            v-for="(item, index) in scope.row.tags"
            :key="index"
            effect="plain"
            size="small"
            >{{ item }}</el-tag
          >
        </template>
      </el-table-column>
      <el-table-column prop="create_at" label="创建时间"> </el-table-column>
      <el-table-column prop="last_modify_at" label="最后修改时间">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="150">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >查看</el-button
          >
          <el-button type="text" size="small">编辑</el-button>
          <el-button type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      articleList: [],
    };
  },
  created() {
    this.$server
      .get("/article/list")
      .then((res) => {
        if (res.status === 200) {
          this.articleList = res.data;
        }
      })
      .catch((err) => console.error(err));
  },
};
</script>

<style lang="less" scoped>
.el-button--text {
  color: @colorPrimary;
}
.el-tag--small {
  margin: 2.5px 5px;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>