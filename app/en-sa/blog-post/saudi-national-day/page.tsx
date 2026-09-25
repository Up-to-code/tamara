import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-blog-post-saudi-national-day-header.html';
import body from '@/components/exact/en-sa-blog-post-saudi-national-day-body.html';
import footer from '@/components/exact/en-sa-blog-post-saudi-national-day-footer.html';
import inline from '@/components/exact/en-sa-blog-post-saudi-national-day.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="en-SA" dir="ltr" />;
}
