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
      <el-table-column fixed prop="_id" label="ID"> </el-table-column>
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
      <el-table-column prop="created_at" label="创建时间"> </el-table-column>
      <el-table-column prop="last_modified_at" label="最后修改时间">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="150">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >查看</el-button
          >
          <el-button type="text" size="small">编辑</el-button>
          <el-button type="text" size="small" @click="handleDelete(scope.row._id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
import {articleListData, deleteArticle} from '../../api/data.js'
export default {
  data() {
    return {
      articleList: [],
    };
  },
  created() {
    this.requestArticleList()
  },
  methods: {
    requestArticleList() {
      articleListData()
        .then((res) => {
          if (res.status === 200) {
            this.articleList = res.data;
          }
        }).catch((err) => console.error(err));
    },
    handleDelete(id) {
      deleteArticle({
        data: {
          id
        }
      })
      .then(
        res => {
          console.log(res)
          this.requestArticleList();
          this.$message.success('删除成功')
        }
      )
      .catch(err => {
        console.log('handleDelete', err)
        this.$message.error('删除失败')
      })
    }
  }
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