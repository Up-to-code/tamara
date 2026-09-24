import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-stores-nice-header.html';
import body from '@/components/exact/en-sa-stores-nice-body.html';
import footer from '@/components/exact/en-sa-stores-nice-footer.html';
import inline from '@/components/exact/en-sa-stores-nice.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
