import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-blog-post-tamara-survey-2024-header.html';
import body from '@/components/exact/en-sa-blog-post-tamara-survey-2024-body.html';
import footer from '@/components/exact/en-sa-blog-post-tamara-survey-2024-footer.html';
import inline from '@/components/exact/en-sa-blog-post-tamara-survey-2024.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
