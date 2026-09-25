import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-industry-laptop-header.html';
import body from '@/components/exact/en-sa-industry-laptop-body.html';
import footer from '@/components/exact/en-sa-industry-laptop-footer.html';
import inline from '@/components/exact/en-sa-industry-laptop.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="en-SA" dir="ltr" />;
}
