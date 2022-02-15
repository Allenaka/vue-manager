<template>
  <el-card class="h-full">
    <div class="btn-group flex space-between">
      <el-button size="small" @click="jump('/article/list')">返 回</el-button>
      <el-button type="primary" size="small" @click="submitForm('form')">发 布</el-button>
    </div>
    <el-form :inline="true" ref="form" :model="form" :rules="formRules">
      <el-form-item label="标题" prop="article_title">
        <el-input v-model="form.article_title"></el-input>
      </el-form-item>
      <el-form-item label="分类" prop="article_category">
        <el-select v-model="form.article_category">
        </el-select>
      </el-form-item>
      <el-form-item label="标签" prop="tag">
        <el-input v-model="tag" maxlength="30" clearable>
          <template v-slot:append>
            <el-button @click="addTag">添加</el-button>
          </template>
        </el-input>
        <div id="tagListArea">
          <el-tag closable v-for="item in form.article_tags" :key="item" @close="removeTag(tag)">{{item}}</el-tag>
        </div>
      </el-form-item>
    </el-form>
    <tinymce-editor></tinymce-editor>
  </el-card>
</template>

<script>
import TinymceEditor from "components/TinymceEditor.vue";
export default {
  components: {
    TinymceEditor,
  },
  data() {
    return {
      tag: '',
      form: {
        article_title: '',
        article_category: '',
        article_tags: [],
      },
      formRules: {
        article_title: [
          {
            required: true,
            message: "此项为必填项",
            trigger: "blur",
          },
        ],
        article_category: [
          {
            required: true,
            message: "此项为必填项",
            trigger: "focus",
          },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    addTag() {
      if (this.form.article_tags.includes(this.tag)) {
        this.$message.warning('已经添加过该标签了')
      } else if (this.form.article_tags.length === 5) {
        this.$message.warning('至多添加5个标签')
      } else {
        this.form.article_tags.push(this.tag)
      }
    },
    removeTag(tag) {
      this.form.article_tags.splice(this.form.article_tags.indexOf(tag), 1);
    },
  },
};
</script>

<style lang="less" scoped>
.el-card {
  box-sizing: border-box;
  /deep/ .el-card__body {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 100%;
    .el-form-item__content {
      .el-input-group {
        width: auto;
        margin-right: 20px;
      }
      #tagListArea {
        display: inline-block;
        max-width: 273px;
      }
    }
    .tox-tinymce {
      flex: 1;
    }
  }
}
</style>