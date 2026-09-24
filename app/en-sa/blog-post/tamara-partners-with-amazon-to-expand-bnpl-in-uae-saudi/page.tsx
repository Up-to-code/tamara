import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-blog-post-tamara-partners-with-amazon-to-expand-bnpl-in-uae-saudi-header.html';
import body from '@/components/exact/en-sa-blog-post-tamara-partners-with-amazon-to-expand-bnpl-in-uae-saudi-body.html';
import footer from '@/components/exact/en-sa-blog-post-tamara-partners-with-amazon-to-expand-bnpl-in-uae-saudi-footer.html';
import inline from '@/components/exact/en-sa-blog-post-tamara-partners-with-amazon-to-expand-bnpl-in-uae-saudi.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
