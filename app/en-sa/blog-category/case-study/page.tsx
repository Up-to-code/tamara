import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-blog-category-case-study-header.html';
import body from '@/components/exact/en-sa-blog-category-case-study-body.html';
import footer from '@/components/exact/en-sa-blog-category-case-study-footer.html';
import inline from '@/components/exact/en-sa-blog-category-case-study.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="en-SA" dir="ltr" />;
}
